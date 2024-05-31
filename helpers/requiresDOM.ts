const requiresDOM = (func:Function) => {
    return function(this: any, ...args:any[]) {
      // Check for DOM availability
      if (typeof window === 'undefined') {
        throw new Error('This function requires DOM and can only be used on the client-side.');
      }
      return func.apply(this, args);
    };
}

export default requiresDOM;