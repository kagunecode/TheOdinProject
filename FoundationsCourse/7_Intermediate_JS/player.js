const Players = function (name, level) {
    let health = level * 2
    let coins = level * 200
    const getName = () => name
    const getLevel = () => level
    const die = () => {
        console.log('You died')
    }

    const damage = x => {
        health -= x
        if (health <= 0) {
            die()
        }
    }

    const getHp = () => {
        console.log(`Player ${name} has ${health} health points`)
    }

    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1)
            console.log(`The player ${enemy.getName()} dealt 1 damage to ${name}`)
        }
        if (level > enemy.getLevel()) {
            enemy.damage(1)
            console.log(`The player ${name} has dealt 1 damage to ${enemy.getName()}`)
        }
    }

    const getCoins = () => {
        console.log(`Player ${name} has ${coins} coins`)
    }
    return { getLevel, getName, attack, damage, getHp, getCoins }
}

const jesse = Player('Jeese', 1)
const walter = Player('Walter', 3)
walter.attack(jesse)
jesse.getHp()
walter.attack(jesse)
walter.getCoins()
