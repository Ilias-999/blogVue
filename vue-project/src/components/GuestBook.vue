<template>
    <div>
      <h1>Guestbook</h1>
      <ul>
        <li v-for="(message, index) in messages" :key="index">
          <strong>{{ message.name }}({{ message.title }}):</strong> {{ message.message }}
        </li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    name: 'Guestbook',
    props: ['messages']
  };
  </script>