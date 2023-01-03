class Person_ {
  // 타입스크립트에서는 클래스에서 사용할
  // 멤버 변수를 최상단에 정의해 주어야 함

  // 멤버변수의 유효범위에 대해서도 설정가능
  // 클래스 안에서만 사용하겠다고 하면 private
  // 그렇지 않으면 기본적으로 public
  // 변경하지 않고 읽기만 하겠다면 readonly
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
