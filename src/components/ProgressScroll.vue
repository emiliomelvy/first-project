<template>
  <div class="progress">
    <span class="progress-value">
      <font-awesome-icon class="icon" icon="arrow-up"
    /></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.progress {
  position: fixed;
  display: flex;
  align-content: center;
  justify-content: center;
  /* bottom: 20px; */
  top: 90vh;
  right: 10px;
  height: 40px;
  width: 40px;
  /* display: none; */
  place-items: center;
  border-radius: 50%;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
  border: 1px solid #60697b;
  cursor: pointer;
}
.progress-value {
  display: block;
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  background-color: transparent;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 35px;
  color: #001a2e;
}
.icon {
  color: #fab758;
  font-size: 17px;
}
</style>
