export default class Schedule{
  constructor(){
    this._delay=0
    this.p = null
  }
  timer(task,ms){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        task && task()
        resolve()
      },ms)
    })
  }
  task(task){
    const {_delay:delay,timer,p}=this
    this.p = p ?p.then(()=>timer(task,delay)) :timer(task,delay)
    return this
  }
  delay(_delay){
    this._delay = _delay
    return this
  }
}