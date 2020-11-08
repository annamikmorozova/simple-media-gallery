# Simple Media Gallery

Simple Media Gallery is an open-source React.js component. It is a ready to use click-through media gallery.

## Preview

![MediaExample](https://res.cloudinary.com/ditqevvs5/image/upload/v1604820396/simple-media-gallery/Gallery_jfzf9v.gif)

## Install
```
npm install simple-media-gallery
```

## Import and use the Component
```
import MediaGallery from "simple-media-gallery";

<MediaGallery
    media={media} 
    title={title}
/>;
 ```

## Pass in your title and media as props

* `title` is a ***string*** and the name of the page
* `media` is an ***array*** with ***objects*** where the parameter `name` is a ***string***, the parameter `imageUrl` is a ***string***, and the parameter `alt` is a ***string***

### The render might look like this

 ```
import Lusia from "./Lusia.jpg";

 ...
    render() {
        const title = "Cats";
        const media = [
            {   
                name: "Lusia",
                imageUrl: Lusia,
                alt: "Lusia"
            },
            {   
                name: "Sleepy",
                imageUrl: Sleepy,
                alt: "Sleepy"
            },
            {   
                name: "Best Friends",
                imageUrl: BestFriends,
                alt: "BestFriends"
            },
            {   
                name: "Fiona",
                imageUrl: Fiona,
                alt: "Fiona"
            },
            {   
                name: "Give Me Food",
                imageUrl: GiveMeFood,
                alt: "GiveMeFood"
            }
        ];

        return (
            <MediaGallery
                media={media} 
                title={title}
            />;
        )
    }
 ```

| Prop | Type  | Description  |
| :---:   | :-: | :-: |
| `title` | `String` | Optional. The title of the page.|
| `media` | `Array` | Required. Include objects in the array to create the media gallery. |
| `media.name` | `String` | Required. Parameter for a media piece. This is the name of the image. |
| `media.imageUrl` | `String` | Required. Parameter for a media piece. This is the path to the image. |
| `media.alt` | `String` | Required. Parameter for a media piece. This is the alt of the image. |

![Icons](https://res.cloudinary.com/ditqevvs5/image/upload/v1604817547/simple-media-gallery/Icons_hr88ld.png)
