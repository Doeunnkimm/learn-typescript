/* eslint-disable prettier/prettier */
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // 제네릭은 실제로
  // API를 호출하고 응답의 규칙/규격을 정의할 때
  // 가장 많이 쓰임!

  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    // 2초 뒤에 위 데이터들이 온다고 묘사한 것!
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    /*
      fetchContacts 함수를 정의할 때
      리턴값을 아예 Promise의 value로 Contact[]으로 했기 때문에
      response에 마우스를 올려보아도 Contact[]로 뜨게 됨
    */
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */

  /* 지금 함수마다 리턴이 있는데 리턴타입을 지정해 주지 않아서 에러가 발생하고 있는 것 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }
  // home, office, studio
  // ==> enum(제한한 문자열의 집합)으로 타입을 지정해 주자
  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }
  // 들어오는 값의 오탈자가 들어오는 경우 문제가 생길 수 있음
  // ==> 들어올 수 있는 값들을 제한해서 변수로 저장해놓는다면 이러한 문제를 해결할 수 있음
  // findContactByPhone('offfice')
  // enum을 통해 사용하면
  // findContactByPhone(PhoneType.office)

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    // 기존 contacts 배열에서 name만 가져와서 새로운 배열을 리턴하는 것
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
  /* ------------------------------------------------ */
}

new AddressBook();
