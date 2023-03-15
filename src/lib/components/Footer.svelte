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

    .quote {
      font-size: var(--small);
      max-width: 90%;
      margin: 0 auto;
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
      .quote {
        font-size: var(--medium-small);
      }
    }
</style>

<footer>
    <div class="footer__container row">
      <p class="paragraph quote">"We must make the building of a free society once more an intellectual adventure, a deed of courage." - Ludwig Von Hayek</p>
      <!-- <a href="/">Home</a>
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
      </ul> -->
    </div>
</footer>