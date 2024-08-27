from pydantic import BaseModel
from datetime import datetime

class InventoryCreate(BaseModel):
    name: str
    quantity: float
    temperature_zone: str
    shelf_life: datetime

class OrderCreate(BaseModel):
    product_id: int
    quantity: float
    status: str
