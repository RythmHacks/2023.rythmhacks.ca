# RythmHacks Website
For the RythmHacks hackathon

https://www.rythmhacks.ca/<br/>
[Backup link](https://rythmhacks.vercel.app/)
[Graphics](https://designstripe.com/) for reference

## Created Using
- React
- Tailwind 
- SASS

## Deployed with
- Vercel

## Instructions for using scroll animations
1. Have these imports
```javascript
import useIsInViewport from '../ScrollAnimation/useIsInViewport.js'
import '../ScrollAnimation/ScrollAnimation.scss'
```
2. Put one of these for each element you want to animate
```javascript
const ref1 = useRef(null);

const isInViewport1 = useIsInViewport(ref1);
```
3. Reference each element like so
```html
 <div ref={ref1} className='hide'>
```
