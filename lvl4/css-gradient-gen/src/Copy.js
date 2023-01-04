import React from "react"

export default function Copy(){
    return(
<div style={{position: "absolute", top: "3px", right: "1px", color: rgba(55, 53, 47, 0.65), display: flex, alignItems: "center", justifyContent: "flex-end", height: "25px", fontSize: "11.5px", opacity: 0, transition: "opacity 300ms ease-in 0s",}}>
<div style="color: rgba(55, 53, 47, 0.65); display: flex; align-items: center; justify-content: center; font-size: 12px; margin-top: 4px; margin-right: 4px;">
    <div className="notion-focusable" role="button" tabindex="0" style="user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; display: inline-flex; align-items: center; white-space: nowrap; height: 25px; border-radius: 3px 0px 0px 3px; font-size: 11.5px; line-height: 1.2; padding: 4px 6px; color: rgb(55, 53, 47); background: rgba(55, 53, 47, 0.08); font-weight: 400;">
        <svg viewBox="0 0 14 16" className="copy" style="width: 16px; height: 16px; display: block; fill: inherit; flex-shrink: 0; backface-visibility: hidden; padding-right: 4px;">
            <path d="M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z">
                </path>
                </svg>
                Copy
                </div>
                </div>
                </div>
                )
}