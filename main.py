def maqStop():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 0)



def maqSlightForward(kyori):
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    if kyori > 0:
        basic.pause(6000*kyori)
        maqStop()
    else:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 200)

    

def maqSlightLeft():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 50)

def maqSlightRight():
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)



def on_forever():
    pass
    if maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        #basic.show_string("S")
        maqSlightForward(0)
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==1 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==0:
        #basic.show_string("R")
        maqSlightLeft()
    elif maqueen.read_patrol(maqueen.Patrol.PATROL_LEFT)==0 and maqueen.read_patrol(maqueen.Patrol.PATROL_RIGHT)==1:
        #basic.show_string("L")
        maqSlightRight()
basic.forever(on_forever)


