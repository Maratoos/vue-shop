<template>

    <ul>
  <li>
    <input id="r1" type="radio" name="radio" value="1">
  </li>
  <li>
    <input id="r2" type="radio" name="radio" value="2">
  </li>
</ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@supports(-webkit-appearance: none) or (-moz-appearance: none) {
  input[type='radio'] {
    --active: transparent;
    --active-inner: #E0BEA2;
    --border: #252525;
    --background: #fff;
    --disabled: #F6F8FF;
    --disabled-inner: #E1E6F9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 18px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid;
    margin-bottom: 40px;
    input:last-child{
        margin-bottom: none;
    }
    &:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
    }
    &:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: .3s;
      --d-t: .6s;
      --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
    }
    &:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: .9;
      &:checked {
        --b: var(--disabled-inner);
        --bc: var(--border);
      }
      & + label {
        cursor: not-allowed;
      }
    }
    &:hover {
      &:not(:checked) {
        &:not(:disabled) {
          --bc: var(--border-hover);
        }
      }
    }
    &:not(.switch) {
      width: 18px;
      &:after {
        opacity: var(--o, 0);
      }
      &:checked {
        --o: 1;
      }
    }
    & + label {
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      margin-left: 10px;
    }
  }
  input[type='radio'] {
    border-radius: 50%;
    &:after {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      transform: scale(var(--s, .7));
    }
    &:checked {
      --s: .5;
    }
  }
}

ul {
  margin: 12px;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: 320px;
  li {
    margin: 16px 0;
    position: relative;
  }
}

* {
  box-sizing: inherit;
  &:before,
  &:after {
    box-sizing: inherit;
  }
}
</style>