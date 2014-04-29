IntervalTree
============

My blog post about this implementation can be find here: http://blog.nextgenetics.net/?e=45

### Description

An interval tree implemented in python. The python script can output a json data structure which can then be queried in browser with provided javascript functions.

### Usage

Input to the tree is a list of coordinates with ID:

    features = [[1,90,'A'],[90,125,'B'],[25,60,'C'],[100,170,'D'],[170,220,'E'],[220,250,'F'],[600,700,'G'],[120,125,'H'],[500,550,'I'],[1000,1200,'J'],[800,850,'K'],[1100,1500,'L']]

The first two elements are the start and end coordinates. THe last element is the feature ID.

### Example
##### To make a new tree
To construct a new tree in python, use the ``intervalTree`` function:

    myTree = intervalTree(features, 0, 1, 1, 2000)

The arguments are: input coordinate data, index of the start position of each coordinate item, index of the end position of each coordinate item, start of the search space, end of the search space. 

The ``features`` variable described in the usage section above contain a list of range items where the ``0`` index element is the start position and the ``1`` index element is the end position. These two start and end indeces are the second and third arguments to the intervalTree function. 

The search space is the coordinate space you want to construct the interval tree on. 

#### To query the tree
To find elements within a range, use the ``findRange`` method:

    results = myTree.findRange([20,200]) #find features within 20-200

This method will return a list of features within the given range.

#### To print to JSON format
Printing native python objects as string is equivalent to JSON format. The interval tree is just a dictionary structure which can be accessed by the ``tree`` property. You can then print it out with a simple print statement:

    print myTree.tree

#### To query with javascript
To query the JSON structure in javascript, use the ``find`` function included in the .js file:

    results = find(myTree, [1,220], 1, 2000)

The function works in the same way as the python implementation. You also have to give extra 3rd and 4th arguments for the search space you want to search within.