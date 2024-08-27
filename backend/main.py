from fastapi import FastAPI
from app import models, routes
from app.utils import create_database

app = FastAPI()

@app.on_event("startup")
async def startup():
    create_database()

app.include_router(routes.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
