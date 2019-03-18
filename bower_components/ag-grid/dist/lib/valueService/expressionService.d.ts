export declare class ExpressionService {
    private expressionToFunctionCache;
    private logger;
    private setBeans(loggerFactory);
    evaluate(expressionOrFunc: Function | string, params: any): any;
    private evaluateExpression(expression, params);
    private createExpressionFunction(expression);
    private createFunctionBody(expression);
}
