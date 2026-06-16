console.log(document);  // DOM , it has whole html but in object (key:value) form
console.log(document.childNodes); // shows all the nodes but in nodelist : its not live , it not gets updated as we make changes in the code , while the HTMLcollection is live

/* diff between nodelist and HTMLCollection :  IMP AS PER INTERVIEW
nodelist : Points to the tree where all the things are nodes
HTMLCollection : points only to the html element
 */
