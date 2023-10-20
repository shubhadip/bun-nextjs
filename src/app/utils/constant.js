export const Files1 = {
    type: "folder",
    name: "parent",
    data: [
      {
        type: "folder",
        name: "root",
        data: [
          {
            type: "folder",
            name: "src",
            data: [
              {
                type: "file",
                name: "index.js",
              },
            ],
          },
          {
            type: "folder",
            name: "public",
            data: [
              {
                type: "file",
                name: "index.ts",
              },
            ],
          },
          {
            type: "file",
            name: "index.html",
          },
          {
            type: "folder",
            name: "data",
            data: [
              {
                type: "folder",
                name: "images",
                data: [
                  {
                    type: "file",
                    name: "image.png",
                  },
                  {
                    type: "file",
                    name: "image2.webp",
                  },
                ],
              },
              {
                type: "file",
                name: "logo.svg",
              },
            ],
          },
          {
            type: "file",
            name: "style.css",
          },
        ],
      },
    ],
  };


export const Files2 ={
    "type":"folder",
    "name":"html",
    "data": [{
        "name":"test.html",
        "type":"file"
    },{
        "name":"test2.html",
        "type":"file"
    },
    {
        "type":"folder",
        "name":"nested html",
        "data": [{
            "name":"file1.html",
            "type":"file"
        },{
            "name":"file2.html",
            "type":"file"
        },{
            "name":"images",
            "type":"folder",
            "data": [
                {
                    "name":"other.png",
                    "type":"file"
                },{
                    "name":"another.png",
                    "type":"file"
                }
            ]
        }]
    }]
}

export const Files3 = Files1.data