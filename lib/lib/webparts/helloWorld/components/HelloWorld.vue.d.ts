import { Vue } from 'vue-property-decorator';
/**
 * Component's properties
 */
export interface IHelloWorldProps {
    description: string;
}
/**
 * Class-component
 */
export default class HelloWorld extends Vue implements IHelloWorldProps {
    /**
     * implementing ISimpleWebPartProps interface
     */
    description: string;
}
//# sourceMappingURL=HelloWorld.vue.d.ts.map