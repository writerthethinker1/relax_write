<!-- formatting images from the images folder. links and embedding in a post -->


[my link]({{ site.images | relative_url }}/{my image name with extension (case sensitive)})

example:

check out this [cool image!]({{ site.images | relative_url }}/Motivation.JPG)

<!-- gives a link to the Motivation.JPG image -->

if you want to embed the image inside a post, put a '!' before the link form:

example:

cool things look like this...

![cool image!]({{ site.images | relative_url }}/Motivation.JPG)

if you want that image to be bigger, use '_' before and after the image posting...

example:

a bigger version of cool things looks like this...

_![cool image!]({{ site.images | relative_url }}/Motivation.JPG)_

finally, if you want full customization of the image (bigger or smaller according to your tastes), use plain html code...


a customizable version of the image in plain .html

<img src="{{ site.images | relative_url }}/Motivation.JPG" width="100%" height="100%" />

<!-- you can customize width, height, and the alt for those hovering over the image, note the double quotes after the '=' -->

<center>
<img src="{{ site.images | relative_url }}/Motivation.JPG" height="50%" width="50%" />
</center>

<!-- if you don't want the image centered, leave out the <center> marks and you can customize the height and width as well for a better view -->
