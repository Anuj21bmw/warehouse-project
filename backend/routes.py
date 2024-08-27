from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas, utils

router = APIRouter()

@router.post("/inventory/")
def create_inventory(item: schemas.InventoryCreate, db: Session = Depends(utils.get_db)):
    db_item = models.Inventory(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@router.post("/orders/")
def create_order(order: schemas.OrderCreate, db: Session = Depends(utils.get_db)):
    db_order = models.Order(**order.dict())
    db.add(db_order)
    db.commit()
    db.refresh(db_order)
    return db_order
