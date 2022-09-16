import React from 'react';
import {useState} from 'react';
import style from '../index.module.css'

export default function Sections({ details, course }) {
    const [expand, setExpand] = useState(false);
    return (
        <div className={"mt-3 accordion " + style.widthRes} id="accordionExample">
            <div className='my-2'>
                <h4 className='my-2'>Course content</h4>
                <div className='d-flex w-100 justify-content-between'>
                    <small>{details.sections.length} sections ,{details.num_of_published_lectures} lectures {course[0].content_info_short} total length</small>
                    <button onClick={() => setExpand(true)} className={expand ? 'd-none' : "btn btn-link"}>Expand All</button>
                    <button onClick={() => setExpand(false)} className={expand ? 'btn btn-link' : "d-none"}>Collapse All</button>
                </div>
            </div>
            {details.sections.map((section) =>
                <div key={section.index} className="accordion-item">
                    <h2 className="accordion-header" id={"head" + section.index}>
                        <button className={"accordion-button text-center " + style.accordionButton + (expand ? "" : " collapsed")} type="button" data-bs-toggle="collapse" data-bs-target={"#section" + section.index} aria-expanded="true" aria-controls={"section" + section.index}>
                            <div className="d-flex w-100 justify-content-between">
                                <h6 className="text-black text-start">{section.title}</h6>
                                <p className="text-black text-end small">{section.lecture_count} lectures {section.content_length_text}min</p>
                            </div>
                        </button>
                    </h2>
                    <div id={"section" + section.index} className={"accordion-collapse collapse " + (expand ? "show" : "")} aria-labelledby={"head" + section.index} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {section.items.map((item) =>
                                <div key={section.index + "" + item.id} className="mb-2 d-flex w-100 bg-white align-items-center justify-content-between">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-play-file" viewBox="0 0 16 16">
                                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z" />
                                        </svg>
                                        <h6 className={item.can_be_previewed ? "d-inline m-1 text-inline" : "d-inline m-1"}>{item.title}</h6>
                                    </div>
                                    <div className='text-end'>
                                        <button className={item.can_be_previewed ? "btn btn-link" : "d-none"}>preview</button>
                                        <span className='m-1'>{item.content_summary}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}