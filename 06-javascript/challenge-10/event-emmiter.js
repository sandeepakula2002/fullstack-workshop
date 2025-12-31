function createEventEmitter() {
  const events = {};

  return {
    on(eventName, listener) {
      if (!events[eventName]) {
        events[eventName] = [];
      }

      events[eventName].push(listener);

      // Return unsubscribe function
      return () => {
        events[eventName] = events[eventName].filter(
          l => l !== listener
        );
      };
    },

    once(eventName, listener) {
      const wrapper = (...args) => {
        listener(...args);
        this.off(eventName, wrapper);
      };

      this.on(eventName, wrapper);
    },

    emit(eventName, data) {
      if (!events[eventName]) return;

      // Copy to prevent mutation during emit
      [...events[eventName]].forEach(listener =>
        listener(data)
      );
    },

    off(eventName, listener) {
      if (!events[eventName]) return;

      if (!listener) {
        delete events[eventName];
      } else {
        events[eventName] = events[eventName].filter(
          l => l !== listener
        );
      }
    }
  };
}
