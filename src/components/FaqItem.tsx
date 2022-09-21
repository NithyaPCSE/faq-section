import { memo } from 'react';
import {FAQ} from "../interfaces/FAQ.interface";

function FaqItem({list,bind}:{list:Array<FAQ>,bind}) {
    return (
        <>
            {
                list.map((l,index) =>
                    <div className={l.default?'accordionitem active' : 'accordionitem'} key={index}>
                        <div className="accordionheading">
                            <h4>
                                <a href="#" {...bind} data-index={index}>{index+1}. {l.title}</a>
                            </h4>
                        </div>
                        <div className="accordioncontent">
                            <p>
                                {l.content}
                            </p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default memo(FaqItem);