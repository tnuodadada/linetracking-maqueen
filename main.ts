function maqStop() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
}

function maqSlightForward(kyori: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    if (kyori > 0) {
        basic.pause(6000 * kyori)
        maqStop()
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    }
    
}

function maqSlightLeft() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
}

function maqSlightRight() {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
}

basic.forever(function on_forever() {
    
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // basic.show_string("S")
        maqSlightForward(0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        // basic.show_string("R")
        maqSlightLeft()
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        // basic.show_string("L")
        maqSlightRight()
    }
    
})
