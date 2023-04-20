import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>
                    Skills
                </h2>
                <div class="container grid grid-cols-3 gap-2 mx-auto">
                    <div class="w-full rounded">
                        <img src="https://i0.wp.com/blogs.embarcadero.com/wp-content/uploads/2020/08/JavaScript-logo.png?ssl=1"
                            alt=""/>
                    </div>
                    <div class="w-full rounded">
                        <img src="http://johnwkirch.com/img/css.png"
                            alt=""/>
                    </div>
                    <div class="w-full rounded">
                        <img src="http://johnwkirch.com/img/html.svg"
                            alt=""/>
                    </div>
                    <div class="w-full rounded">
                        <img src="http://johnwkirch.com/img/node.svg"
                            alt=""/>
                    </div>
                    <div class="w-full rounded">
                        <img src="image.png"
                            alt=""/>
                    </div>
                    <div class="w-full rounded">
                        <img src="http://johnwkirch.com/img/sql.png"
                            alt=""/>
                    </div>
                    <div class="w-full rounded">
                        <img src="http://johnwkirch.com/img/git.svg"
                            alt=""/>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills