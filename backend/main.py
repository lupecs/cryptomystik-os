from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "CryptoMystik Backend Running"} 

@app.get('/predict')
def predict():
    return {"prediction": "This is where the prediction will be returned"}