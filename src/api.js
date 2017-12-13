
const MockData = new Map();
MockData.set('notes', new Map());
MockData.set('todos', new Map());

function selectMap(url) {
  if (/\/notes/.test(url) === true) {
    return MockData.get('notes');
  }
  else if (/\/todos/.test(url) === true) {
    return MockData.get('todos');
  }
}

function identifiesCollection(url) {
  return url.endsWith('/notes') || url.endsWith('/todos');
}

export function $get(url) {
  return new Promise((resolve, reject) => {
    const mockData = selectMap(url);
    if (mockData) {
      if (identifiesCollection(url) === true) {
        resolve(Array.from(mockData.values)); // e.g. GET /notes
      }
      else if (mockData.has(url) === true) {
        resolve(Object.assign({}, mockData.get(url))); // e.g. GET /notes/1
      }
      else {
        reject({ statusCode: 404, statusText: 'Not Found' });
      }
    } 
    else {
      reject({ statusCode: 404, statusText: 'Not Found' });
    }
  });
};

export function $post(url, payload) {
  return new Promise((resolve, reject) => {
    if (identifiesCollection(url) === true) {
      const mockData = selectMap(url);
      const newObj = Object.assign({}, payload, { id: Date.now() });
      mockData.set(`${url}/${newObj.id}`, newObj);
      resolve(Object.assign({}, newObj));
    }
    else {
      reject({ statusCode: 400, statusText: 'Bad Request', reason: 'URI does not support the method' });
    }
  });
};

export function $put(url, payload) {
  return new Promise((resolve, reject) => {
    if (identifiesCollection(url) === false) {
      const mockData = selectMap(url);
      console.log(`$put ${url}`);
      if (mockData.has(url) === true) {
        mockData.set(url, Object.assign({}, payload));
        resolve(Object.assign({}, mockData.get(url)));
      } 
      else {
        console.log(`could not find ${url}`);
        console.log(mockData);
        reject({ statusCode: 404, statusText: 'Not Found' });
      }
    }
    else {
      reject({ statusCode: 400, statusText: 'Bad Request', reason: 'URI does not support the method' });
    }
  });
};

export function $delete(url) {
  return new Promise((resolve, reject) => {
    if (identifiesCollection(url) === false) {
      const mockData = selectMap(url);
      if (mockData.has(url) === true) {
        if (mockData.delete(url) === true) {
          resolve(true);
        }
        else {
          reject({ statusCode: 500, statusText: 'Internal Server Error' });
        }
      } 
      else {
        reject({ statusCode: 404, statusText: 'Not Found' });
      }
    }
    else {
      reject({ statusCode: 400, statusText: 'Bad Request', reason: 'URI does not support the method' });
    }
  });
};