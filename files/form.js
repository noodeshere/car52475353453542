class Form {
    constructor(){
    this.heading=createElement('h4','car racing game')    
    this.input=createInput('name')
    this.button=createButton('play')
this.heading.position(100,100)
this.input.position(100,200)
this.button.position(200,300)
}
display(){
    this.button.mousePressed(()=>{
     this.heading.hide()   
     this.input.hide() 
     this.button.hide() 
  player.name=this.input.value()
    this.greeting1=createElement('h3','hello '+player.name )
    this.greeting2=createElement('h2','wait for other player to join')
    this.greeting1.position(100,100)
    this.greeting2.position(100,200)
playerCount=playerCount+1
player.index=playerCount
player.update()
player.updateCount(playerCount)
})
}
}