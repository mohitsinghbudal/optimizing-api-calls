import React from 'react'
import{Link, NavLink,createBrowserRouter} from 'react-router-dom'

function ReactRouter() {
  return (
    <div>ReactRouter</div>
  )
}

const router = createBrowserRouter([
    {path: "/", Component:Root},
]);

export default ReactRouter