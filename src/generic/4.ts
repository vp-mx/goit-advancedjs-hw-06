/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IPageProps {
  title: string;
}
interface IComponentProps<T> {
  props: T;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IPageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
