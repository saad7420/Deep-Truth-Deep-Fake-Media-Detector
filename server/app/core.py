"""
App factory — wires up CORS, routes, startup/shutdown hooks.
"""

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from app.database import init_db
from app.routers import cases, health


@asynccontextmanager
async def lifespan(application: FastAPI):
    """Initialise the SQLite database on startup."""
    await init_db()
    yield


def create_app() -> FastAPI:
    application = FastAPI(
        title="ForensicsHub API",
        description="Deepfake & synthetic media detection backend.",
        version="1.0.0",
        lifespan=lifespan,
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
    )

    # ── CORS ─────────────────────────────────────────────────────────────────
    # Set ALLOWED_ORIGINS in your .env (comma-separated) or keep the wildcard
    # for local development.
    raw_origins = os.getenv("ALLOWED_ORIGINS", "*")
    origins = [o.strip() for o in raw_origins.split(",")] if raw_origins != "*" else ["*"]

    application.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        expose_headers=["X-Request-ID"],
    )

    # ── Static file serving (uploaded evidence files) ────────────────────────
    upload_dir = os.getenv("UPLOAD_DIR", "uploads")
    os.makedirs(upload_dir, exist_ok=True)
    application.mount("/uploads", StaticFiles(directory=upload_dir), name="uploads")

    # ── Routers ───────────────────────────────────────────────────────────────
    application.include_router(health.router, prefix="/api", tags=["health"])
    application.include_router(cases.router, prefix="/api", tags=["cases"])

    return application
