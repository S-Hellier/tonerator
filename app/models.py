from sqlalchemy import Column, String, JSON, ForeignKey, TIMESTAMP
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
import uuid

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column( UUID(as_uuid=True), primary_key=True, default=uuid.uuid4 )
    email = Column( String, nullable=False, unique=True)
    password = Column( String, nullable=False )
    guitars = Column( JSON, nullable=False, default=dict )
    amps = Column( JSON, nullable=False, default=dict )
    pedals = Column( JSON, nullable=False, default=dict )
    current_rig = Column( JSON, nullable=False, default=dict )
