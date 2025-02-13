import {RelationIdMetadataArgs} from "../../metadata-args/RelationIdMetadataArgs";
import { getMetadataArgsStorage } from "../../metadata-args/MetadataArgsStorage";
import { SelectQueryBuilder } from "../../query-builder/SelectQueryBuilder";

/**
 * Special decorator used to extract relation id into separate entity property.
 *
 * @experimental
 */
export function RelationId<T>(relation: string|((object: T) => any), alias?: string, queryBuilderFactory?: (qb: SelectQueryBuilder<any>) => SelectQueryBuilder<any>): Function {
    return function (object: Object, propertyName: string) {

        getMetadataArgsStorage().relationIds.push({
            target: object.constructor,
            propertyName: propertyName,
            relation: relation,
            alias: alias,
            queryBuilderFactory: queryBuilderFactory
        } as RelationIdMetadataArgs);
    };
}
