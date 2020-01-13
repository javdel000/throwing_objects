namespace SpriteKind {
    export const badprojectile = SpriteKind.create()
}
function hero2 () {
    hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 7 7 7 . . . . . . . 
. . . . . 7 5 5 5 7 . . . . . . 
. . . . . 5 d d 5 5 . . . . . . 
. . . . . d 6 d 6 d . . . . . . 
. . . . . d 6 d 6 d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . d 7 7 7 7 7 7 7 d . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . . e e 5 e e . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . . e e . e e . . . . . . 
. . . . . e e . e e . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    hero.setPosition(126, 89)
}
function cloud2 () {
    cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . d 1 d d . . . . . . . . 
. . d d d d d d d d d 1 . . . . 
. d d d d f d d d f d d d . . . 
. 1 d d d d d d d d d d d . . . 
. d d d d d d d d d d d d d . . 
. . . d d f f f f f d d d 1 . . 
. . . d d d d d d d d d d d . . 
. . . . d 1 d d d d . d d d . . 
. . . . . d d d . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
}
function background () {
    scene.setBackgroundColor(11)
}
function score () {
    info.changeScoreBy(2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball = sprites.createProjectileFromSprite(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c 2 d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d 2 c 
c c 2 b c c c c b d d 2 b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, hero, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
function raindrop () {
    snow = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 . . 9 9 . . 1 . . . . 
. . . . . 1 . 9 9 . 1 . . . . . 
. . . . . . 1 9 9 1 . . . . . . 
. . . . 9 9 9 1 1 9 9 9 . . . . 
. . . . 9 9 9 1 1 9 9 9 . . . . 
. . . . . . 1 9 9 1 . . . . . . 
. . . . . 1 . 9 9 . 1 . . . . . 
. . . . 1 . . 9 9 . . 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud, 0, 100)
    snow.y += 0
    snow.x += Math.randomRange(-10, 200)
}
let snow: Sprite = null
let ball: Sprite = null
let cloud: Sprite = null
let hero: Sprite = null
background()
hero()
cloud()
controller.moveSprite(hero, 200, 100)
game.onUpdateInterval(200, function () {
    raindrop()
})
game.onUpdateInterval(500, function () {
    cloud()
})
game.onUpdateInterval(500, function () {
    score()
})
game.onUpdateInterval(2250, function () {
    cloud.setPosition(11, 0)
})
