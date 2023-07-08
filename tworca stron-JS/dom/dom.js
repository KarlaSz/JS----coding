const DOM = {
    name: 'document',
    type: 'Document',
    children: [
        {
            name: 'html',
            type: 'Element',
            children: [
                {
                    name: 'head',
                    type: 'Element'                 
                },
                {
                    name: 'body',
                    type: 'Element',
                    children: [
                        {
                            name: 'h1',
                            type: 'Element',
                            children: [
                                {
                                    name: 'text',
                                    type: 'Text',
                                    content: 'Czym jest DOM?'
                                }
                            ]
                        },
                        {
                            name: 'p',
                            type: 'Element'
                        },
                        {
                            name: 'a',
                            type: 'Element'
                        }
                    ]
                }
            ]
        } 
    ]
}

const txt = '{"name":"Jan"}';

JSON.parse(txt);
console.log(txt)