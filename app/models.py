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

class Guitar(Base):
    __tablename__ = "guitars"
    id = Column( UUID(as_uuid=True), primary_key=True, default=uuid.uuid4 )
    user_id = Column( UUID(as_uuid=True), ForeignKey('users.id'), nullable=False )
    name = Column( String, nullable=False )
    brand = Column( String, nullable=False )
    model = Column( String, nullable=False )
    year = Column( String, nullable=True )
    type = Column( String, nullable=False )  # e.g., electric, acoustic
    pickup_config = Column ( JSON, nullable=False ) #SSS, HSS, SS, HH, etc.
    specs = Column( JSON, nullable=True )  # e.g., pickups, wood type
    created_at = Column( TIMESTAMP, nullable=False )

class Amp(Base):
    __tablename__ = "amps"
    id = Column( UUID(as_uuid=True), primary_key=True, default=uuid.uuid4 )
    user_id = Column( UUID(as_uuid=True), ForeignKey('users.id'), nullable=False )
    name = Column( String, nullable=False )
    brand = Column( String, nullable=False )
    model = Column( String, nullable=False )
    year = Column( String, nullable=True )
    type = Column( String, nullable=False )  # e.g., tube, solid state
    specs = Column( JSON, nullable=True )  # e.g., wattage, speaker size
    created_at = Column( TIMESTAMP, nullable=False )

class Pedal(Base):
    __tablename__ = "pedals"
    id = Column( UUID(as_uuid=True), primary_key=True, default=uuid.uuid4 )
    user_id = Column( UUID(as_uuid=True), ForeignKey('users.id'), nullable=False )
    name = Column( String, nullable=False )
    brand = Column( String, nullable=False )
    model = Column( String, nullable=False )
    year = Column( String, nullable=True )
    type = Column( String, nullable=False )  # e.g., distortion, delay
    controls = Column( JSON, nullable=False )  # gain, tone, level, etc.
    created_at = Column( TIMESTAMP, nullable=False )

class Rig(Base):
    __tablename__ = "rigs"
    id = Column( UUID(as_uuid=True), primary_key=True, default=uuid.uuid4 )
    user_id = Column( UUID(as_uuid=True), ForeignKey('users.id'), nullable=False )
    name = Column( String, nullable=False )
    description = Column( String, nullable=True )
    guitar_id = Column( UUID(as_uuid=True), ForeignKey('guitars.id'), nullable=False )
    amp_id = Column( UUID(as_uuid=True), ForeignKey('amps.id'), nullable=False )
    pedal_ids = Column( JSON, nullable=False ) 
    created_at = Column( TIMESTAMP, nullable=False )

class RigItem(Base):
    __tablename__ = "rig_items"
    id = Column( UUID(as_uuid=True), primary_key=True, default=uuid.uuid4 )
    rig_id = Column( UUID(as_uuid=True), ForeignKey('rigs.id'), nullable=False )
    position = Column( int, nullable=False )  # e.g., 1 for guitar, 2 for amp, etc.
    item_type = Column( String, nullable=False )  # e.g., guitar, amp, pedal
    item_id = Column( UUID(as_uuid=True), nullable=False )  # ID of the item in the respective table
    created_at = Column( TIMESTAMP, nullable=False )