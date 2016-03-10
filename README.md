#Website Performance Optimization portfolio project

##Getting Started
>To run, you can either navigate to http://79.170.40.53/kamal-cheema-uow.com/optimize/dist/, 
>or Download the project on your machine.

**optimized files are in dist directory.**

I have optimized index.html to achieve at least a **90 PageSpeed score**. I've optimized the JavaScript in pizza.html to achieve a **frame rate of 60fps** when scrolling. I've also reduced the time to resize pizzas in pizza.html to less than **5 ms**.

- Optimization Tips and Tricks

- Optimizing Performance

- Analyzing the Critical Rendering Path

- Optimizing the Critical Rendering Path

- Avoiding Rendering Blocking CSS

##Optimizing JavaScript

Measuring with Navigation Timing. We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.

The fewer the downloads, the better

- Reduce the size of text

- Optimize images

- HTTP caching

##Customization with Bootstrap



###Part 1: Optimize PageSpeed Insights score for index.html

**Optimizations:**

- Download optimized assets from google page insights to fix pizzeria.img

- Inline css/style.css

- Make google-analytics script async

- Add a media query for print.css

- Use Web Font Loader to load the Google webfont asynchronously

**Use Gulp to:**
- Minify CSS,
- Uglify JS,
- Minify HTML

**Sources:** 

- https://teamtreehouse.com/library/gulp-basics

- https://github.com/typekit/webfontloader

###Part 2: Optimize Frames per Second in main.js

**Optimizations:**

- Use requestAnimationFrame for updatePositions

- Move all constants out of the for loop in updatePositions

- Switch to document.getElementById instead of document.querySelector in function determineDx

- Declare var phase outside the for loop on line 561 to prevent it from being created each iteration

- Declare var elem outside the loop on line 599 to prevent it being created each iteration

- Declare movingPizzas outside the for loop to prevent a DOM call on each iteration

- Move the Math.sin calculation out for the for loop in updatePositions

- Move var items = document.getElementsByClassName('mover'); to the anonymous function at the bottom of the file to stop updatePositions from re-defining items on every scroll event

- To make rotation and translation work in background pizzas, use
     items[i].style.transform = 'translateX(' + 100 * phase + 'px)'; on line 549

- Replace "querySelector" with getElementById in document.getElementById("movingPizzas1").appendChild(elem);

**Sources:**

- https://github.com/lacyjpr/optimization/

- https://discussions.udacity.com/t/p4-pizza-scrolling-rasterize-paint/30713/13

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

###Part 3: Optimize Time to Resize Pizzas in main.js

**Optimizations:**

Made the following changes to changePizzaSizes:

- Move document.document.querySelectorAll(".randomPizzaContainer"); outside the for loop

- Refactor to use a switch to set pizza width in order to avoid Forced Synchronous Layout and avoid use of determineDx to determine new pizza widths

- Move var pizzasDiv = document.getElementById("randomPizzas"); out of the for loop on line 498 so the loop only makes one DOM call

- Change CSS for .randomPizzaContainer: Add transform: translateZ(0); and will-change: transform;

- Switch to document.getElementsByClassName from document.querySelectorAll in this line of changePizzaSizes var randomPizzas = document.getElementsByClassName("randomPizzaContainer");

- Move randomPizzas.length to a local variable so the array's length property isn't accessed on each iteration

**Source:**

- https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
 
- https://www.udacity.com/course/viewer#!/c-nd001/l-5988439100/m-6379192090

The portfolio was built on Twitter's Bootstrap framework. All custom styles are in dist/css/portfolio.css in the portfolio repo.

- Bootstrap's CSS Classes,
- Bootstrap's Components,

**Sample Portfolios**


- http://ianlunn.co.uk/

- http://www.adhamdannaway.com/portfolio

- http://www.timboelaars.nl/

- http://futoryan.prosite.com/

- http://playonpixels.prosite.com/21591/projects
