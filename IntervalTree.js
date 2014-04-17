//accessory functions for finding overlap
function ptWithin(pt, subject) {
  if (pt >= subject[0] && pt <= subject[1]) return true;
  return false;
}

function overlap(query, subject) {
  if (self.ptWithin(query[0], subject) || self.ptWithin(query[1], subject) || self.ptWithin(subject[0], query) || self.ptWithin(subject[1], query)) return true;
  return false;
}

//accessory function to remove redundancies in an array
function unique(a) {
  var temp = {};
  var len = a.length;

  if (len > 0) {
    do {
      len --;
      temp[a[len]] = true;
    } while (len)
  }

  var r = [];
  for (var k in temp) r.push(k);
  return r;
}

//recursively finds features within find range, same as the python implementation
function find(node, findRange, start, end) {
  var data = [];
  var left = [start, node[0]];
  var right = [node[0], end];
  if (overlap(left, findRange)) {
    data = data.concat(node[3]);
    if (node[1] != -1) data = data.concat(find(node[1], findRange, left[0], left[1]));
  }
  if (overlap(right, findRange)) {
    data = data.concat(node[3]);
    if (node[2] != -1) data = data.concat(find(node[2], findRange, right[0], right[1]));
  }
  return unique(data);
}