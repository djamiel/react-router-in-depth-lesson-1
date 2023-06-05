import { Outlet } from "react-router-dom"

export default function CareersLayout() {
    return (
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Aliquam a nulla sapien. Duis dignissim dolor magna, quis pulvinar sem luctus non. Etiam sed vehicula sem, id pulvinar sem. Aenean non mauris erat. Integer laoreet a est nec semper. Mauris tincidunt enim eu urna porttitor, vitae feugiat arcu vehicula. Morbi mauris dolor, dictum sit amet tortor vitae, sagittis vehicula risus.</p>

            <Outlet />
        </div>
    )
}