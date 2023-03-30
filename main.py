from pathlib import Path
import requests

from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
import uvicorn

from src.routes import auth


app_dir = Path(__file__).parent

app = FastAPI()

templates = Jinja2Templates(directory=app_dir / "templates")

app.include_router(auth.router)

@app.get('/')
def hello(request: Request):
    contacts = get_contacts()
    return templates.TemplateResponse("index.html", {"request": request, "image": contacts[6].get("avatar")})


    


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
    # print(response.json())
    # print(get_contacts())