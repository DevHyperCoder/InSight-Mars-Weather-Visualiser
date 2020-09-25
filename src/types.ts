export type Num = {
  av:number,
  mn:number,
  mx:number,
  ct:number
}

export type NasaMarsWeather = {
    Season:'winter'| 'spring'| 'summer' |'fall',
    AT:Num,
    HWS:Num,
    PRE:Num
}