<style>
    footer {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: var(--primary-font);
        font-size: var(--x-small);
    }

    .footer__container {
      max-width: 75rem;
      margin: 2rem auto;
      padding: 0 2rem;
      position: relative;
      color: var(--highlight-color);
    }

    ul {
        margin: 0;
        list-style-type: none;
        display: flex;
        gap: 1rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    @media (min-width: 600px) {
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
</style>

<footer>
    <div class="footer__container row">
      <a href="/">Home</a>
      <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
      </ul>
    </div>
</footer>