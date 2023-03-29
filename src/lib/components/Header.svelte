<script>
    import { onMount, onDestroy } from 'svelte';

    let isOpen = false;
    let bar1Class = '';
    let bar2Class = '';
    let bar3Class = '';
  
    const toggleHamburger = () => {
      isOpen = !isOpen;
      setAnimationClasses();
    };
  
    const setAnimationClasses = () => {
      if (isOpen) {
        bar1Class = 'animateBar1';
        bar2Class = 'animateBar2';
        bar3Class = 'animateBar3';
      } else {
        bar1Class = '';
        bar2Class = '';
        bar3Class = '';
      }
    };

  onMount(() => {
    window.addEventListener('click', (event) => {
      if (!event.target.closest('.hamburger')) {
        isOpen = false;
        setAnimationClasses();
      }
    });
  });
  </script>
  

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        padding: 2em 1rem;
        margin: 0 auto;
        max-width: 90%;
        width: 100%;
    }

    .navbar .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: var(--small);
        font-family: var(--primary-font);
        width: 100%;
    }

    .navbar .left a {
        text-decoration: none;
        color: var(--font-color);
    }

    .navbar .left a:hover {
        color: var(--highlight-color);
    }

    .navbar .right {
        display: none;
        
    }

    .navbar .right a {
        text-decoration: none;
        color: var(--font-color);
    }

    .navbar .right a:hover {
        text-decoration: underline;
    }

    .navbar .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 36px;
    }

    .navbar .bar {
        background-color: var(--font-color);
        height: 3px;
        width: 100%;
        margin: 3px;
    }

    .animateBar1 {
        animation: flipBar1 1s;
        animation-fill-mode: forwards;
    }
    .animateBar2 {
        animation: fadeBar2 1s;
        animation-fill-mode: forwards;
    }
    .animateBar3 {
        animation: flipBar3 1s;
        animation-fill-mode: forwards;
    }

    @keyframes fadeBar2 {
        from {
            transform: scaleX(1);
            opacity: 1;
        }
        to {
            transform: scaleX(0);
            opacity: 0;
        }
    }


    @keyframes flipBar1 {
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(45deg) translate(3px, 9px); 
        }
    
    }
    @keyframes flipBar3 {
        from {
            transform: rotate(0)
        }
        to {
            transform: rotate(-45deg) translate(3px, -9px);
        }
    }

    @media (min-width: 768px){
        .navbar .right {
            width: 25em;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: var(--secondary-font);
        }

        .navbar .hamburger {
            display: none;
        }
    }
</style>

<header class='navbar'>
  <div class="left">
    <a href="/">Roberto Mayen</a>
</div>
  <nav class="right">
    <a href="/about">About</a>
    <a href="/work">Work</a>
    <a href="/blog">Blog</a>
    <a href="/contact">Contact</a>
  </nav>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="hamburger" on:click={toggleHamburger}>
    <div class="bar bar1" class:animateBar1={bar1Class}></div>
    <div class="bar bar2" class:animateBar2={bar2Class}></div>
    <div class="bar bar3" class:animateBar3={bar3Class}></div>
  </div>
</header>