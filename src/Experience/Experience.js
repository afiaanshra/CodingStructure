import * as THREE from 'three'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Camera from './Camera.js'
import World from './World/World.js'
import Renderer from './Renderer'

let instance=null
export default class Experience
{
    constructor(_canvas)
    {
        //Singleton
        if(instance)
        {
            return instance
        }
        instance=this

        //GLobal access
        window.experience=this

        //Options
     this.canvas=_canvas
     this.scene= new THREE.Scene()
     this.sizes=new Sizes()
     this.time=new Time()
     this.camera=new Camera()
     this.rendere=new Renderer()
     this.world=new World()
     console.log('yes')
     console.log('yes')

     //Resize Event
     this.sizes.on('resize', ()=>
     {
        this.resize()
        

     })

     this.time.on('tick',()=>
     {
        this.update
     })   
    }  
     
     resize()
     {
        this.camera.resize()
        this.rendere.resize()
        
     }
     
     update()
     {
        this.camera.update()
        this.rendere.update()

     }
    }
