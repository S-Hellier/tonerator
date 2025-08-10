# tonerator
Tool that allows users to input a guitar rig and prompt the app with a description of a particular tone

Stack: 
Node/Express/JS Backend
Postgres Database

## How it Works
* When users create an account, they can start to add gear to their collection. As of now, gear includes instruments (only an endpoint for guitars right now), amps, and pedals.
* Users should add gear that reflects their actual gear setup

### User-Defined Parameters for All Gear:
- A name, which should be the name with which the user colloquially refers to their piece of gear. For example, if a user has a red stratocaster they might refer to it casually as "red strat".
- The Brand of the gear, ie Fender, Gibson, Line6, Marshall, etc
- The model name of the gear, ie Stratocaster, Blues Deluxe, MG50GFX, TS-9, etc
- The year that particular piece of gear was produced. Though this is an optional parameter, it can be quite important in helping the model determine how to produce the desired tone.
- The 'type' of the gear
    - For guitars, this might be electric, acoustic, baritone, 7-string electric, etc.
    - For amps, the type options are generally tube and solid-state
    - For pedals, the type would be something like overdrive, delay, reverb, etc.
- Miscellaneous specs. This is a chance to inform your model about anything else regarding your gear that might help to create a more accurate tone.
    - For guitars, this may be something like the pickups that are currently installed, string type/gauge, tonewood for acoustic, etc
    - For amps, this could include any speaker changes the user has made, or whether the grill has been replaced


### More Specific User-Defined Parameters:
- Guitars
    - Pickup Configuration: the configuration of the pickups should be inputted in the commonly-defined method, `SSS`, `HSS`, `HH`, etc. The order of the pickups should be defined as bridge to neck, so `HSS` would mean a humbucker in the neck
- Pedals
    - Controls: this allows the user to give the ability to define the specific controls on their pedal, including what the scale of the control is. For example: "drive": 10
