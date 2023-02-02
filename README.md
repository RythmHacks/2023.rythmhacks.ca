# RythmHacks Website
Website for the RythmHacks hackathon

https://www.rythmhacks.ca/<br/>
[Backup link](https://rythmhacks.vercel.app/)<br/>
[Graphics](https://designstripe.com/) for reference

## Created Using
- React
- Tailwind 
- SASS

## Deployed with
- Vercel
- Google Domains

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
<div ref={ref1} className={isInViewport1 ? 'hide show' : "hide"}></div>
```

## Page Section Structure
```html
<div id='page name' className='section'>
    
    <!-- additional div, usually for scroll animations -->
    <div>

        <h3>header <h3 className='gradient blue'>gradient</h3>, period.</h3>
        
        <!-- text and image section -->
        <div className='sectionwrapper'>
            <p>
                put text here
            </p>
            <img loading='lazy' src={src} alt='alt'></img>
            <!-- all images are lazy loaded and have an alt attribute -->
        </div>

    </div>
</div>
```