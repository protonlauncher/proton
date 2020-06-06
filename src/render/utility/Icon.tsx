import * as React from 'react'


interface IconNameMap {
    "test1": any,
    "bigcool": any
}

interface Icon2Props<L> {
    type: L
}

export const LocalIcon: <K extends keyof IconNameMap>(props: Icon2Props<K>) => JSX.Element = props => (
    <div>

    </div>
)


