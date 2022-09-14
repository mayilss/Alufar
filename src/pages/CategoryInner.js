import { Banner } from "../components/Banner";
import { CategoryNav } from "../components/CategoryNav";

import bg from '../images/al-sys-banner.png';
import empty from '../images/empty-rect.png';
import { ProjectCard } from "../components/ProjectCard";
import { SimpleTitle } from "../components/SimpleTitle";
import { AlSysCard } from "../components/AlSysCard";

export const CategoryInner = () => {
    return (
        <div>
            <Banner
                img={bg}
                title='Memarlıq 
                sistemləri'
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Autem excepturi sed quis. Soluta nam esse ipsum illum excepturi, 
                perspiciatis tempora quod tempore cumque aperiam deleniti assumenda 
                voluptatibus maiores omnis sequi!'
            />
            <div className="container">
                <CategoryNav />
                <div className="row mt-5">
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                    <div className="col-md-3 col-sm-6 col-12">
                        <ProjectCard
                            img={empty}
                            title='Lorem Ipsum'
                        />
                    </div>
                </div>
                <div className="text-center mt-5 mb-4">
                    <SimpleTitle title='Digər sistemlər' />
                </div>
                <div className="row py-4">
                    <div className="col-4">
                        <AlSysCard />
                    </div>
                    <div className="col-4">
                        <AlSysCard />
                    </div>
                    <div className="col-4">
                        <AlSysCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

