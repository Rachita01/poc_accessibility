import React from 'react'

function NewTabComponent() {
  return (
    <div className="pc-tab">
<input checked="true" id="tab1" type="radio" name="pct" />
<input id="tab2" type="radio" name="pct" />
<input id="tab3" type="radio" name="pct" />
  <nav>
    <ul>
      <li className="tab1">
        <label for="tab1">First Tab</label>
      </li>
      <li className="tab2">
        <label for="tab2">Second Tab</label>
      </li>
      <li className="tab3">
        <label for="tab3">Third Tab</label>
      </li>
    </ul>
  </nav>
  <section>
    <div classNameName="tab1">
      <h2>First</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus itaque quidem minus nostrum, voluptatem accusamus aspernatur quia harum ratione, officia laudantium inventore autem doloribus atque labore numquam non. Hic, animi.</p>
    </div>
    <div className="tab2">
      <h2>Second</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nesciunt ipsum dolore error repellendus officiis aliquid a, vitae reprehenderit, accusantium vero, ad. Obcaecati numquam sapiente cupiditate. Praesentium eaque, quae error!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, maiores.</p>
    </div>
    <div className="tab3">
      <h2>Third</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nobis culpa rem, vitae earum aliquid.</p>
    </div>
  </section>
</div>
  
  )
}

export default NewTabComponent

