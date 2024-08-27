from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.database import Base

class Inventory(Base):
    __tablename__ = 'inventory'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    quantity = Column(Float)
    temperature_zone = Column(String)
    shelf_life = Column(DateTime)

class Order(Base):
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(Integer, ForeignKey('inventory.id'))
    quantity = Column(Float)
    status = Column(String)
    inventory = relationship("Inventory")
